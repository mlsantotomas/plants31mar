import { LightningElement, wire } from 'lwc';
import getAllSpec  from "@salesforce/apex/SpeciesService.getAllSpecies"

export default class SpeciesList extends LightningElement {
    @wire(getAllSpec)
    species;  //propiedad que quiero decorar
    
     //Va a tner dos parámetros:  species.data --> datos devueltos por Apex 
      //species.error --> si error se almacena aki

    
} 