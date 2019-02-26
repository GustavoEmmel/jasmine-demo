import "reflect-metadata";
import { IApplicationRunner } from './interfaces/application-runner.interface';
import { TYPES } from './interfaces/types';
import { Calculator } from './app/calculator';
import { ICalculator } from './interfaces/calculator.interface';
import { Container } from "inversify";
import { App } from './app';

export class AppContainer extends Container {
  constructor(automaticBind = true) {
    super({ defaultScope: "Request" });

    if (automaticBind) {
      this.bind<ICalculator>(TYPES.ICalculator).to(Calculator);
      this.bind<IApplicationRunner>(TYPES.IApplicationRunner).to(App);
    }
  }

  getMainApp(): IApplicationRunner {
    return this.get<IApplicationRunner>(TYPES.IApplicationRunner);
  }
}