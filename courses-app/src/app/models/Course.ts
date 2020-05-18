export class Course {
    id: string;
    name: string;
    ects: number;
    semesterNumber: number;
    classFormat: string;
    maxStudents: number;
    score: number;
    iconPath?: string;
    description?: string;

    public constructor(init?:Partial<Course>) {
        Object.assign(this, init);
    }
}