const { initializEApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyDFkiQJcGI2omdv7LEbAE9fPLe4-XhOdwo",
    authDomain: "first-database-access-firebase.firebaseapp.com",
    projectId: "first-database-access-firebase",
    storageBucket: "first-database-access-firebase.appspot.com",
    messagingSenderId: "451994052578",
    appId: "1:451994052578:web:fa4fb702ac7fbdc0233bbb",
    measurementId: "G-PY39H8YX90"
}

const app = initializEApp(firebaseConfig);
const db = getFirestore();

async function cadastrar(nomeTabela, codigo, dados){
    if (codigo){
        const referenceEntity = await setDoc(doc(db, nomeTabela), dados);
        const saveData = {
            ...dados,
            codigo: referenceEntity.codigo
        }
        return saveData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dados);
        const saveData = {
            ...dados,
            codigo: referenceEntity.codigo
        }
        return saveData;
    }
}

async function buscar(nomeTabela){
    const tabelaRef = collection(db, nometabela);
    const q = query(tabelaRef);
    const querySnapshot = await getDocs(q);
    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            codigo : doc.codigo
        }
        lista.push(data);
    })
    return lista;
}

async function buscarPorCodigo(nomeTabela, codigo){
    const docRef = doc(db, nomeTabela, codigo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();
    } else {
        return new Erros("Not found!");
    }
}

async function remover(nomeTabela, codigo){
    const dados = await deleteDoc(doc(db, nomeTabela, codigo));
    return {
        message
    }
}

module.exports = {
    cadastrar,
    buscar,
    buscarPorCodigo,
    remover
}