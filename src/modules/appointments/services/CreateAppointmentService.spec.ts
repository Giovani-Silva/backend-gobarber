import 'reflect-metadata';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '12121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12121212');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository2 = new FakeAppointmentRepository();
    const createAppointment2 = new CreateAppointmentService(
      fakeAppointmentsRepository2,
    );

    const appointmentDate = new Date();

    await createAppointment2.execute({
      date: appointmentDate,
      provider_id: '123123',
    });

    expect(
      createAppointment2.execute({
        date: appointmentDate,
        provider_id: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
