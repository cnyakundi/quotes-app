import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("Cyprian Nyakundi is learning many things today", "user1", "Cyprian", 0, 0, new Date(2020,8,20)),
    new Quote("Cyprian is Nyakundi", "Guru", "User2", 0, 0, new Date(2016,4,13)),
  ];
  
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteModel: Quote

  showNew: boolean = false;

  submitType = 'save'; 

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  onNew() {
    this.quoteModel = new Quote("", "", "", 0, 0, new Date());
    this.showNew = true;
    this.submitType = 'save';
  }

  onSave() {
    if (this.submitType === 'save') {
      this.quotes.push(this.quoteModel);
    }
    this.showNew = false;
  }

  onCancel() {
    this.showNew = false;
  }

  delete(i) {
    this.quotes.splice()
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
