import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let componentFixture: ComponentFixture<AppComponent>;
  let httpTestingController: HttpTestingController;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient, provideHttpClientTesting],
    }).compileComponents();
    componentFixture = TestBed.createComponent(AppComponent)
    httpTestingController = TestBed.inject(HttpTestingController)
    component = componentFixture.componentInstance
    componentFixture.detectChanges
  });

  it('Should make a call and update the data', () => {
    const mockResponse = {data: {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }}
    component.onFetch()

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/1')

    expect(req.request.method).toBe('GET')
    req.flush(mockResponse)

    expect(component.post()).toEqual(mockResponse.data)
  })
});
