import { Component, inject } from '@angular/core';
import { input, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ModalBusService } from './modal-bus.service';

const NG_IMPORTS = [AsyncPipe];
const IMPORTS = [ButtonComponent];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  readonly modalBusService = inject(ModalBusService);

  onAccept = output<void>();
  preventAction = input(false);
}
