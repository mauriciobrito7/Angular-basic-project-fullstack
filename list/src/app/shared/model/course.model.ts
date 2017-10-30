export interface CourseModel {
    _id;
    title: string;
    description?: string;
}

export class Course  implements CourseModel {
    constructor(
        public _id,
        public title,
        public description
    ) {}
}
