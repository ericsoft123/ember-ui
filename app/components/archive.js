import Component from '@glimmer/component';
import { inject as service } from '@ember/service'
//import { tracked } from '@glimmer/tracking';
import {action } from '@ember/object';
import fetch from 'fetch';

export default class ArchiveComponent extends Component {
  @service store;
  //@tracked Archived= false;

  @action async toggleArchive(id){

   /* console.log(id);
    //console.log(this.Archived);
    this.Archived = !this.Archived;*/





     var requestOptions = {
      method: 'PATCH',
      redirect: 'follow'
    };

    fetch(`/api/users/${id}`, requestOptions)
      .then(response => response.json())
     //.then(result => console.log(result))
      .then(result =>this.store.push(result))
      .catch(error => console.log('error', error));



  }
}

