import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { IsponibilidadService } from 'src/app/services/isponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  listaciclo : Ciclo[]=[] 
  listausuario: Usuario[]=[]
  disponibilidad: Disponibilidad = {}

  constructor(private cicloService: CicloService,private usuarioService:UsuarioService,
    private disponibilidadService:IsponibilidadService) {
      this.cicloService.listaciclo().subscribe(
        ciclos => this.listaciclo = ciclos
      );
      this.usuarioService.listausuario().subscribe(
        usuarios => this.listausuario = usuarios
      );
     }


     saveDisponibilidad(){
      console.log(this.disponibilidad);

      this.disponibilidadService.create(this.disponibilidad).subscribe(
        Response =>{
          console.log(Response.mensaje);
          alert(Response.mensaje)
        },
        error =>{
          console.log(error.mensaje);
          alert(error.mensaje);
          
        }
      );
      
    }


  ngOnInit(): void {
  }

}
