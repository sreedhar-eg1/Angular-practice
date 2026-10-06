class UserService {
  sayHello() {
    console.log("Hello");
  }
}

class Component {
  constructor(public User: UserService) {}
}

// Angular Dependency Injection

class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    _providers.forEach((service) =>
      this._container.set(service, new service()),
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);

    if (!serviceInstance) {
      throw Error("No provider found.");
    }

    return serviceInstance;
  }
}

// Somewhere in the Application

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

component.User.sayHello();
