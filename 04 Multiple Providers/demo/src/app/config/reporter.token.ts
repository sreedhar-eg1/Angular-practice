import { InjectionToken } from "@angular/core";

import { Reporter } from "../models/reporter";

export const REPORTERS = new InjectionToken<Reporter>("reporters");
