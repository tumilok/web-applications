import { Course } from './models/Course';

export const Courses: Course[] = [
    {
        id: '1',
        name: 'Object Oriented Programming',
        ects: 3,
        semesterNumber: 3,
        classFormat: 'Laboratorium',
        maxStudents: 10,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'The aim of the course is to acquaint students with the object-oriented programming paradigm. Students learn techniques such as inheritance, delegation, and hiding implementations.'
    },
    {
        id: '2',
        name: 'Functional Programming',
        ects: 2,
        semesterNumber: 3,
        classFormat: 'Laboratorium',
        maxStudents: 12,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'Based on Haskell this course emphasizes general notions, techniques and patterns of functional programming that are universal and applicable in practically any language in contemporary use today.'
    },
    {
        id: '3',
        name: 'Imperative Programming',
        ects: 3,
        semesterNumber: 2,
        classFormat: 'Laboratorium',
        maxStudents: 15,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'The goal of the class is to acquaint students with syntax and semantics of the C language, showing the rules of algorithm design and coding as well as using suitable data structures.'
    },
    {
        id: '4',
        name: 'Linear Algebra',
        ects: 6,
        semesterNumber: 1,
        classFormat: 'Practice',
        maxStudents: 25,
        score: null,
        iconPath: 'assets/img/math.jpg'
    },
    {
        id: '5',
        name: 'Algorithms and Data Structure',
        ects: 6,
        semesterNumber: 2,
        classFormat: 'Practice',
        maxStudents: 20,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'This course introduces basic algorithms, data structures, and methods of designing effective algorithmic solutions.'
    },
    {
        id: '6',
        name: 'Introduction to Computer Science',
        ects: 6,
        semesterNumber: 1,
        classFormat: 'Lecture',
        maxStudents: 22,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'The aim of the course is to familiarize students with the basic concepts of computer science, programming in a procedural language and introduction to basic algorithms and data structures.'
    },
    {
        id: '7',
        name: 'Introduction to Data Basis',
        ects: 4,
        semesterNumber: 3,
        classFormat: 'Project',
        maxStudents: 8,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'Zaprezentowanie podstaw teorii baz danych ze szczególnym uwzględnieniem modelu relacyjnego. Przedstawienie całego procesu projektowania i implementacji struktury baz danych.'
    },
    {
        id: '8',
        name: 'Introduction to Web-Applications',
        ects: 3,
        semesterNumber: 3,
        classFormat: 'Project',
        maxStudents: 14,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'Celem modułu jest nabycie umiejętności tworzenia aplikacji webowych w oparciu o technologie HTML5, CSS3 oraz JavaScript. Zastosowanie stosu JS obejmującego zarówno część frontendową jak i backendową.'
    },
    {
        id: '9',
        name: 'Discret Mathematics',
        ects: 5,
        semesterNumber: 1,
        classFormat: 'Practice',
        maxStudents: 30,
        score: null,
        iconPath: 'assets/img/math.jpg',
        description: 'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.'
    },
    {
        id: '10',
        name: 'Introduction to UNIX System',
        ects: 3,
        semesterNumber: 1,
        classFormat: 'Laboratorium',
        maxStudents: 12,
        score: null,
        iconPath: 'assets/img/programming.jpg',
        description: 'The aim of the module is to equip the student / student with the ability to use the UNIX operating system and based on it using the knowledge of its construction and practical skills.'
    }
];