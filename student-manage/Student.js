class Student {
    id;
    name;
    age;

    constructor(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}