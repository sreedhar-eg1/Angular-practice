import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { CustomHttpParameterCodec } from './customHttpParameterCodec';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  API_URL = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL)
  }

  getSinglePost(): Observable<Post> {
    // Easy way of passing params with the help of object(convert automatically to params)
    // const params = {id: 1}
    // return this.http.get<Post>(this.API_URL, {params})

    // passing inside object
    // return this.http.get<Post>(this.API_URL, {params: {id: 1}})

    // constructing params using httpParams which is immutable
    const httpParams = new HttpParams()
    let params = httpParams.set('id', 1)
    return this.http.get<Post>(this.API_URL, {params})

    // manually passing params data in the URL
    // return this.http.get<Post>(this.API_URL + `/1`)

    // Use of Custom Http codec
    // let httpParams = new HttpParams({encoder: new CustomHttpParameterCodec()})
    // httpParams = httpParams.set('user id', 1)
    // return this.http.get<Post>(this.API_URL, {params: httpParams})

    // use of decoder(custom)
    // const decodeUrl = 'https://jsonplaceholder.typicode.com/users?par1=parameter_1&par_2=parameter_2'
    // const httpParams = new HttpParams({fromString: decodeUrl.split('?')[1], encoder: new CustomHttpParameterCodec()})
    // console.log(httpParams.get('par1'))
    // console.log(httpParams.get('par 2'))

  }

  getSingleUser(): Observable<any> {
    // Object literal way of adding headers
    // const headers = {
    //   'X-Debug_header': 'degug1234',
    //   'origin_value': 'from server' 
    // }
    // return this.http.get<User>('https://jsonplaceholder.typicode.com/users' + `/1`, {headers})
    // return this.http.get<User>('https://jsonplaceholder.typicode.com/users' + `/1`, {headers: {
    //   'X-Debug_header': 'degug1234',
    //   'origin_value': 'from server' 
    // }})

    // With the help of httpHeaders(immutable)
    let baseHeaders = new HttpHeaders().set('x-Debug-level', 'minimal')
    // let updateHeaders = new HttpHeaders().set('x-Debug-level', 'verbose')
    let updateHeaders = baseHeaders.append('x-Debug', 'verbose')

    return this.http.get<any>('https://jsonplaceholder.typicode.com/users' + `/1`, {observe: 'response' as const, headers: updateHeaders})
  }

  getSampleTestFile() {
    return this.http.get('sampleText.txt', {responseType: 'text'})
  }

  getImage() {
    return this.http.get('favicon.ico', {responseType: 'arraybuffer'})
  }

  uploadFile(file: File) {
    const formData = new FormData()
    formData.append('file', file)

    return this.http.post(`https://api.escuelajs.co/api/v1/files/upload`, formData, {reportProgress: true, observe: 'events' as const})
  }

  uploadFileUsingLocalServer(file: File) {
    const formData = new FormData()
    formData.append('file', file)

    return this.http.post(`http://localhost:3000/api/upload`, formData, {reportProgress: true, observe: 'events' as const})
  }
}
