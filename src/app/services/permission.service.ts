import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  isTeamPresent(userToken: any, teamId: string): Observable<boolean> {
    const hasPermission = userToken && userToken.permissions.includes(`Team: ${teamId}`)
    
    return of(hasPermission)
  }
}

export const userToken = {
  permissions: ['Team: 1', 'Team: 2']
}
