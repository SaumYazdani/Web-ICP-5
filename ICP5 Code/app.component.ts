import { Component } from '@angular/core';
import {NULL_AS_ANY} from '@angular/compiler-cli/src/ngtsc/typecheck/src/expression';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = "Your Todo List";
  /*creating a list with the following format for future additions*/
  todolist = [
    {
      label: 'Example task',
      completed: false,
    }
  ];
/* this function adds todos to the user's screen. each item pair is pushed to the list. */
  addtodo(itemname:string) {
    var newtodo = {
      label: itemname,
      completed: false,
    };
    this.todolist.push(newtodo);
  }
/* remove function removes the element user wants to delete */
  remove() {
    this.todolist.splice(0, 1);
  }
  /* tick returns a predefined time countdown from today */
  tick: any;
  ctdate = new Date("december 31, 2021 12:00:00").getTime();
  x = setInterval(() => {
      const today = new Date().getTime();
      const diff = this.ctdate - today;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.tick = days.toFixed(0) + 'days' + hours.toFixed(0) + 'hours' + minutes.toFixed(0) + 'minutes' + seconds.toFixed(0) + 'seconds';
    });
  }


