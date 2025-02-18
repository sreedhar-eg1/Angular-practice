import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch user details', () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Alice' },
    ];

    userService.getSingleUser().subscribe({
      next: (users) => {
        expect(users.length).toBe(4)
        expect(users).toEqual(mockUsers)
      }
    })

    const req = httpTestingController.expectOne('https://example.api.com/users')
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers)
  });
});
