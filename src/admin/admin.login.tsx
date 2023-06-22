import { IonAlert, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import '../theme/table.css';
import { useEffect, useState } from 'react';
import { login, validate_token } from '../Api';
import jwt from 'jsonwebtoken';
const LogIn: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string }>();
  const [admin, setAdmin] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    validate_token()
    if ('token' in localStorage) {
      history.push("/clients");
    }
  });

  const createAccount = () => {
    history.push('/signin');
  }
  const loginAdmin = () => {
    login("admin/", admin).then(data => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      history.push("/clients");
    }).catch(err => {setIsOpen(true); setMessage("Email or Password not found!");});
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Admin Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-padding'>
        <IonCard className='ion-padding'>
          <IonRow>
            <IonCol>
              <IonInput onIonChange={e => admin.email = e.detail.value} value={admin.email} type='email' label="Email" labelPlacement="floating" fill="outline" placeholder="Enter Email:"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput onIonChange={e => admin.password = e.detail.value} value={admin.password} type='password' label="Password" labelPlacement="floating" fill="outline" placeholder="Enter Password:"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonText className='link' color={"secondary"} onClick={createAccount}>Create a new account</IonText>
          </IonRow>
          <IonRow>
            <IonButton onClick={loginAdmin}>
              Login
            </IonButton>
          </IonRow>
        </IonCard>
        <IonAlert
          isOpen={isOpen}
          header="Failed"
          subHeader="Important message!"
          message={message}
          buttons={['OK']}
          onDidDismiss={() => setIsOpen(false)}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
