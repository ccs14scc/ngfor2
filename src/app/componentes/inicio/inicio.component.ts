import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
//Instanciar en una variable el formulario reactivo
formularioForm;
//FIN Instanciar en una variable el formulario reactivo
//Crear un constructor: Esto permita inicializar variables con atributos y valores
constructor(private formBuilder: FormBuilder){
  this.formularioForm = this.formBuilder.group({
    nombre: '',
    apellido: ''
  });
}  
//FIN Crear un constructor: Esto permita inicializar variables con atributos y valores

//Creamos un programa principal al cargar la web. Este se ejecuta al momento de cargar la página Web
ngOnInit() {
  console.log("hola");
}
//Fin programa principal

enviarDatos(){
  //Podemos crear una variable donde almacenaremos los datos capturados (opcional)
  let datos_formulario = this.formularioForm.value;
  //Fin variable datos formulario

  //Imprimir por consola los datos capturados en la variable
  console.log(datos_formulario);
  console.warn('Los datos capturados son:', this.formularioForm.value);
  this.formularioForm.reset();
  
  //Fin imprimir por consola
}


}
