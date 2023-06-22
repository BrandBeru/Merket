import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { add, archive, archiveOutline, archiveSharp, bagHandleOutline, bandageOutline, barChart, barChartOutline, barbellOutline, basketOutline, bookmarkOutline, cart, cartOutline, chatboxOutline, desktopOutline, heartOutline, heartSharp, homeOutline, list, mailOutline, mailSharp, manOutline, paperPlaneOutline, paperPlaneSharp, person, personOutline, removeOutline, reorderTwo, reorderTwoOutline, saveOutline, shirtOutline, storefront, storefrontOutline, timeOutline, trashOutline, trashSharp, trendingUpOutline, warningOutline, warningSharp, watchOutline, womanOutline } from 'ionicons/icons';
import './style.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'New',
        url: '/store/new',
        iosIcon: timeOutline,
        mdIcon: timeOutline
    },
    {
        title: 'Top Sell',
        url: '/store/top',
        iosIcon: trendingUpOutline,
        mdIcon: trendingUpOutline
    },
    {
        title: 'Saved',
        url: '/store/saved',
        iosIcon: bookmarkOutline,
        mdIcon: bookmarkOutline
    },
    {
        title: '',
        url: '#',
        iosIcon: removeOutline,
        mdIcon: removeOutline
    },
    {
        title: 'Medicine',
        url: '/store/women',
        iosIcon: bandageOutline,
        mdIcon: bandageOutline
    },
    {
        title: 'Sport',
        url: '/store/sport',
        iosIcon: barbellOutline,
        mdIcon: barbellOutline
    },
    {
        title: 'Home',
        url: '/store/home',
        iosIcon: homeOutline,
        mdIcon: homeOutline
    }, 
    {
        title: 'Technology',
        url: '/store/tech',
        iosIcon: desktopOutline,
        mdIcon: desktopOutline
    }, 
    {
        title: '',
        url: '#',
        iosIcon: removeOutline,
        mdIcon: removeOutline
    },
    {
        title: 'Contant',
        url: '/store/accessories',
        iosIcon: chatboxOutline,
        mdIcon: chatboxOutline
    }
];

//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const StoreMenu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="content_client" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Shopping</IonListHeader>
                    <IonNote>BrandBeru - market</IonNote>

                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>


            </IonContent>
        </IonMenu>
    );
    /*<IonList id="labels-list">
            <IonListHeader>Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList>*/
};

export default StoreMenu;
