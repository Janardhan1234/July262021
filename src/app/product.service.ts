import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(){
    return [{"id":1,"companyName":"Eayo","email":"cdurrad0@dion.ne.jp"},
    {"id":2,"companyName":"Jabberstorm","email":"iroach1@bravesites.com"},
    {"id":3,"companyName":"Vipe","email":"higlesias2@sitemeter.com"},
    {"id":4,"companyName":"Divanoodle","email":"jsulter3@newsvine.com"},
    {"id":5,"companyName":"Buzzdog","email":"jwoolerton4@tripadvisor.com"},
    {"id":6,"companyName":"Oba","email":"ehawyes5@ustream.tv"},
    {"id":7,"companyName":"Aimbo","email":"gbartolomeu6@princeton.edu"},
    {"id":8,"companyName":"Demimbu","email":"dsonley7@histats.com"},
    {"id":9,"companyName":"Divanoodle","email":"ltackle8@opera.com"},
    {"id":10,"companyName":"Voonder","email":"dtarbatt9@eventbrite.com"},
    {"id":11,"companyName":"Youspan","email":"rconlona@webeden.co.uk"},
    {"id":12,"companyName":"Mydo","email":"cmostynb@pbs.org"},
    {"id":13,"companyName":"Skinix","email":"mrycec@netscape.com"},
    {"id":14,"companyName":"Kayveo","email":"mginid@berkeley.edu"},
    {"id":15,"companyName":"Wikido","email":"uedise@xrea.com"},
    {"id":16,"companyName":"Aivee","email":"vkarmelf@wufoo.com"},
    {"id":17,"companyName":"Fanoodle","email":"dissacofg@salon.com"},
    {"id":18,"companyName":"Ooba","email":"rrotlaufh@bravesites.com"},
    {"id":19,"companyName":"Topiclounge","email":"awaweri@chron.com"},
    {"id":20,"companyName":"Teklist","email":"agallawayj@howstuffworks.com"},
    {"id":21,"companyName":"Photospace","email":"rstutterk@salon.com"},
    {"id":22,"companyName":"Omba","email":"kprofitl@redcross.org"},
    {"id":23,"companyName":"Zooveo","email":"clucockm@mediafire.com"},
    {"id":24,"companyName":"Zazio","email":"orosboroughn@yolasite.com"},
    {"id":25,"companyName":"Blognation","email":"mrobilliardo@plala.or.jp"}
    ];
  }
}
