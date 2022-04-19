// Ejemplo 1: Crear una clase vacía
class Persona {}
console.log('Ejemplo 1: Crear una clase vacía');
console.log(Persona);

console.log('********************************************************');

// Ejemplo 2: Crear un objeto a partir de una clase
class Mascota {}
const MiMascota1 = new Mascota(); // Puedo crear muchos objetos de la clase mascota.
console.log('Ejemplo 2: Crear un objeto a partir de una clase');
console.log(MiMascota1); // un objeto de la clase Pet

console.log('********************************************************');

// Ejemplo 3: Instanciar un objeto con atributos
class Estudiante {
	// El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
	constructor(nombre, edad, materias) {
		this.nombre = nombre;
		this.edad = edad;
		this.materias = materias;
	};
};
// Crear un objeto de la clase Estudiante (esto se le llama instanciación)
const estudianteLuka = new Estudiante('Luka', 31, ['React', 'JavaScript', 'HTML']);
console.log('Ejemplo 3: Instanciar un objeto con atributos');
console.log(estudianteLuka);

console.log('********************************************************');

// Ejemplo 4: Métodos en los objetos
class Repositorio {
	constructor(nombre, autor, idioma, calificacion) {
		this.nombre = "Ejercicios";
		this.autor = "Lukita";
		this.language = "JavaScript";
		this.stars = 5;
	}
	getInfo() {
		// es una función que ejecutará cualquier objeto instanciado de esta clase
		return `Repositorio ${this.nombre} tiene ${this.stars} stars`;
	}
}
console.log('Ejemplo 4: Métodos en los objetos');
const miRepo = new Repositorio('Mas Ejercicios', 'Galleta', 'js', 10);
console.log(miRepo.getInfo());

console.log('********************************************************');

// Ejemplo 5: Atributos con valores por default
class PullRequest {
	constructor(repo, title, lines_changed) {
		this.repo = repo;
		this.title = title;
		this.lines_changed = lines_changed;
		this.status = 'OPEN';
		this.dateCreated = new Date();
    // esto guardará la fecha actual en que se instancia el objeto
	}
	getInfo() {
		return `Este solicitud esta en el repo: ${this.repo} (status: ${this.status}) y fue creado ${this.dateCreated}`;
	}
}
console.log('Ejemplo 5: Atributos con valores por default');
const myPR1 = new PullRequest('LaunchW', 'Mi Primer solicitud', 100);
console.log(myPR1.getInfo());
// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest('LaunchZ', 'Mi segunda solicitud', 99);
console.log(myPR2.getInfo());

console.log('********************************************************');

// Ejemplo 6: Getters para acceder a los atributos del objeto
class Galletosa {
	constructor(name, age, stack) {
		this.name = name;
		this.age = age;
		this.stack = stack;
		this.exercises_completed = 10;
		this.exercises_todo = 10;
	}
	// Podemos acceder a los atributos de esta clase
	get getExercisesCompleted() {
		return this.exercises_completed;
	};
};
console.log('Ejemplo 6: Getters para acceder a los atributos del objeto');
const galle = new Galletosa('Galleta', 12, []);
console.log(galle.age);
console.log(galle.getExercisesCompleted);

console.log('********************************************************');

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
	constructor(name, mission) {
		this.name = name;
		this.mission = mission;
		this.students = 20;
		this.lives = 10;
	};
	get getStudents() {
		return this.students; //obtenemos el valor del atributo students
	};
	get getLives() {
		return this.lives; //obtenemos el valor del atributo lives
	};

	set setStudents(students) {
		this.students = students; // modificamos el valor del atributo students
	};
	set setLives(lives) {
		this.lives = lives; // modificamos el valor del atributo lives
	};
};
console.log('Ejemplo 7: Setters para modificar los atributos del objeto');
const missionCommanderNode = new MissionCommander('Luka', 'javascript'); //reasignamos name y mission.

console.log(missionCommanderNode.getStudents); // 20 por default
console.log(missionCommanderNode.getLives); // 10 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;

console.log(missionCommanderNode.getStudents); // 100
console.log(missionCommanderNode.getLives); // 3 

console.log('********************************************************');

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
	static getMostUsefulTools() {
		return ['linea comando', 'git', 'editor de texto'];
	};
};
console.log('Ejemplo 8: Métodos static');
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools());
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

console.log('********************************************************');
/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/
// Ejemplo  9: Herencia entre dos clases
class Developer {
	constructor(name, mainLang, stack) {
		this.name = name;
		this.mainLang = mainLang;
		this.stack = stack;
	};
	get getName() {
		return this.name;
	};
};
console.log('Ejemplo  9: Herencia entre dos clases');
const lukaDev = new Developer('Luka', 'javascript', ['react', 'html', 'css']);
console.log(lukaDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {}
const lukaLaunchXDev = new LaunchXStudent('Lucy', 'node', ['elixir', 'groovy', 'lisp']);
console.log(lukaLaunchXDev);
console.log(lukaLaunchXDev.getName); 
// getter de la clase padre rehusada en la clase hija

console.log('********************************************************');

// Ejemplo 10: Overrinding methods
class Explorer {
	constructor(name, username, mission) {
		this.name = name;
		this.username = username;
		this.mission = mission;
	};
	getNameAndUsername() {
		return `Explorer ${this.name}, username: ${this.username}`;
	};
};
class Viajero extends Explorer { // hereda de Explorer
	constructor(name, username, mission, cycle) {
		super(name, username, mission); // SUPER nos ayudará a llamar el constructor padre
		this.cycle = cycle; // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
	};
	getGeneralInfo() {
		let nameAndUsername = this.getNameAndUsername(); // llamamos el método de la clase padre
		// nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
		return `${nameAndUsername}, Ciclo ${this.cycle}`;
	};
};

const viajero1 = new Viajero('Lucila', 'Launch_X', 'NodeJS', 'Abril 2022');
console.log('Ejemplo 10: Overrinding methods');
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); // Método de la clase padre
console.log(viajero1.getGeneralInfo()); // Método de la clase hija
