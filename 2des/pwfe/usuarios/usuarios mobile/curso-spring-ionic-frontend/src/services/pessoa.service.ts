import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pessoa } from "../models/pessoa.dto";
import { URLBASE } from "../config/api.config";

@Injectable()
export class PessoaService {

    constructor(public HttpClient: HttpClient) { }

    get(pessoa: Pessoa) {
        var url = URLBASE.urlBase + "/webservice.php?id=" + pessoa.idPessoa;
        return this.HttpClient.get<Pessoa[]>(url);
    }
}