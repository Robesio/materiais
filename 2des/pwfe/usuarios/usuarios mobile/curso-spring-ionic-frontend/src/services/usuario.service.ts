import { Injectable } from "@angular/core";
import { URLBASE } from "../config/api.config";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.dto";

@Injectable()
export class UsuarioService {

    constructor(public HttpClient: HttpClient) { }

    post(usuario: Usuario) {
        var url = URLBASE.urlBase + "/webservice.php";
        return this.HttpClient.post<Usuario>(url, usuario);
    }

}
