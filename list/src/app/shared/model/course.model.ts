export interface CourseModel {
    title: string;
    description?: string;
}

export class Course  implements CourseModel {
    constructor(
        public title,
        public description
    ) {}
}
