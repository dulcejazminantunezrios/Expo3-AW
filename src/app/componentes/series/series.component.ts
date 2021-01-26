import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  nombre: string | null =""

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
  irPeliculas(id:number){
    this.router.navigate(['/peliculas',id])
  }

}
