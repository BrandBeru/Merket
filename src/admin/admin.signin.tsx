import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';

const SignIn: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string }>();
  const history = useHistory();

  const login = () => {
    history.push('/login');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Admin Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-padding'>
        <IonCard className='ion-padding'>
          <IonRow>
            <IonCol>
              <IonInput label="Name" labelPlacement="floating" fill="outline" placeholder="Enter Name:"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput type='email' label="Email" labelPlacement="floating" fill="outline" placeholder="Enter Email:"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput type='password' label="Password" labelPlacement="floating" fill="outline" placeholder="Enter Password:"></IonInput>
            </IonCol>
            <IonCol>
              <IonInput type='password' label="Repeat Password" labelPlacement="floating" fill="outline" placeholder="Enter Password Again:"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonText className='link' color={"secondary"}  onClick={login}>I already have an account</IonText>
          </IonRow>
          <IonRow>
            <IonButton>
              Sign In
            </IonButton>
          </IonRow>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
