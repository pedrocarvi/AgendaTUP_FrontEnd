import { Component } from "@angular/core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent{
    iconoFacebook=faFacebook
    iconoTwitter=faTwitter
    iconoGoogle=faGoogle
    iconoLinkedin=faLinkedin
}
