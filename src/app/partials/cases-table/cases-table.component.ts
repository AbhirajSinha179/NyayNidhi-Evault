import { Component } from '@angular/core';

@Component({
  selector: 'app-cases-table',
  templateUrl: './cases-table.component.html',
  styleUrls: ['./cases-table.component.css']
})
export class CasesTableComponent {
  cases=[
    {name:'Case 1', judge:"Alan", dueDate:"12/2/23", status:'Completed'},
    {name:'Case 2', judge:"Bob", dueDate:"1/9/23", status:'Ongoing'},
    {name:'Case 3', judge:"Charlie", dueDate:"2/12/23", status:'Ongoing'},
    {name:'Case 4', judge:"David", dueDate:"19/7/23", status:'Completed'}
  ];
}
