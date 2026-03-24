import {
  Component,
  inject,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { ModalBusService } from '../../../../shared/components/modal/modal-bus.service';

@Component({
  selector: 'app-home-reservation',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    ModalComponent,
  ],
  templateUrl: './home-reservation.component.html',
  styleUrl: './home-reservation.component.css',
})
export class HomeReservationComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly modalBusService =
    inject(ModalBusService);
  private destroyRef = inject(DestroyRef);

  reservationForm: FormGroup = new FormGroup({});
  reservationModalForm!: FormGroup;
  mySuscription!: Subscription;

  constructor() {
    this.reservationForm = this.fb.group({
      dateReservation: ['', [Validators.required]],
      timeReservation: ['', [Validators.required]],
    });

    this.reservationModalForm = this.fb.group({
      dateReservation: [
        this.reservationForm.get('dateReservation')?.value,
        [Validators.required],
      ],
      timeReservation: [
        this.reservationForm.get('timeReservation')?.value,
        [Validators.required],
      ],

      fullName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numberSeats: [
        0,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(4),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.reservationForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ dateReservation, timeReservation }) => {
        this.reservationModalForm.patchValue(
          {
            dateReservation,
            timeReservation,
          },
          {
            emitEvent: false,
          },
        );

        // this.reservationModalForm //otra forma sin el patch value pero no es tan optima
        //   .get('dateReservation')
        //   ?.setValue(dateReservation);
        // this.reservationModalForm
        //   .get('timeReservation')
        //   ?.setValue(timeReservation);
      });

    this.reservationModalForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ dateReservation, timeReservation }) => {
        this.reservationForm.patchValue(
          {
            dateReservation,
            timeReservation,
          },
          {
            emitEvent: false,
          },
        );
      });
  }

  onReserve() {
    if (this.reservationForm.invalid) {
      return;
    }
    this.modalBusService.openModal();
    console.log(this.reservationForm.value);
  }
}
