import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-doscampos',
  templateUrl: './doscampos.component.html',
  styleUrls: ['./doscampos.component.css']
})
export class DoscamposComponent implements OnInit {
  registros: any[] = [];
  formulario: FormGroup;

  constructor(private registroSrv: RegistroService, private fb: FormBuilder) {
    // Crear el formulario con dos campos vacíos
    this.formulario = this.fb.group({
      campo1: [''],
      campo2: ['']
    });
  }

  ngOnInit() {
    this.registrosObtenidos();
  }

  registrosObtenidos() {
    this.registroSrv.obtenerRegistros().subscribe(
      (response: any) => {
        console.log(response); // Verificar la respuesta completa
        this.registros = response.registros; // Asegurarse de que 'registros' exista en la respuesta
        console.log("Registros obtenidos:", this.registros);
      },
      error => {
        console.log("Error al obtener registros:", error);
      }
    );
  }

  guardarDatos() {
    const datos = this.formulario.value;
    console.log("Datos enviados desde el formulario:", datos);

    // Limpiar los campos del formulario después de enviarlo
    this.formulario.reset(); 
  }
}


