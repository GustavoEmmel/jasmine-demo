import { ICalculator } from './interfaces/calculator.interface';
import { IApplicationRunner } from './interfaces/application-runner.interface';
import { injectable, inject } from 'inversify';
import { TYPES } from './interfaces/types';
import { AppContainer } from './app-container';

@injectable()
export class App implements IApplicationRunner {

  constructor(
    @inject(TYPES.ICalculator) private readonly calculator: ICalculator,
  ) {

  }

  start() {
    console.log(this.calculator.sum(4, 5));
  }
}

new AppContainer().getMainApp().start();