export interface DemoUrl {
    url: string,
    video: boolean
}

export interface DemoContext {
    $implicit: number, //Default field
    demo: string,
    url: DemoUrl
}