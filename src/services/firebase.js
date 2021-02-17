import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

import config from '../../config';

firebase.initializeApp(config);

export const auth = firebase.auth();

export const analytics = firebase.analytics();

export const fireStore = firebase.firestore;

export const db = firebase.firestore();
