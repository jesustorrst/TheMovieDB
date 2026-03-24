import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalBusService {
  private modalSubject = new BehaviorSubject(false);

  modalState$ = this.modalSubject.asObservable();

  private modalSignal = signal(false);
  modalState = this.modalSignal.asReadonly();

  openModal() {
    this.modalSubject.next(true);
  }

  openModalWithSignal() {
    this.modalSignal.set(true);
  }

  closeModal() {
    this.modalSubject.next(false);
  }

  closeModalWithSignal() {
    this.modalSignal.set(false);
  }
}
