import axios from 'axios';
import {key} from './config';

function bookSearch(search) {
    
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&projection=lite&'+ key)
        .then((response) => {
            console.log(response)
            var dataSet = [];
            
            for (var i = 0; i < response.data.items.length; i++) {
                
                let obj = {};
                var a = response.data.items[i];
                obj.title = a.volumeInfo.title;
                obj.author = a.volumeInfo.authors[0];
                obj.image = a.volumeInfo.imageLinks.thumbnail;
                obj.published = a.volumeInfo.publishedDate;
                obj.bookInfo = a.volumeInfo.infoLink;
                dataSet.push(obj);
            } 
            // console.log(dataSet);
            return dataSet
            
        })
}

// document.getElementById('button').addEventListener('click', bookSearch, false)

export default bookSearch