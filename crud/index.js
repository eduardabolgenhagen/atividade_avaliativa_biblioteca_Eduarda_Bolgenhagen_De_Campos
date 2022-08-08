const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    were,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCUPqbanzfc8qG-YiB45VggXRWaenM6ijA",
    authDomain: "biblioteca-blibol.firebaseapp.com",
    projectId: "biblioteca-blibol",
    storageBucket: "biblioteca-blibol.appspot.com",
    messagingSenderId: "991625930225",
    appId: "1:991625930225:web:4e398e01e834ff7d8dd050",
    measurementId: "G-08NLZ02FDE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cadastrar(nomeTabela, codigo, dados) {
    if (codigo) {
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

async function buscar(nomeTabela) {
    const tabelaRef = collection(db, nomeTabela);
    const q = query(tabelaRef);
    const querySnapshot = await getDocs(q);
    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            codigo: doc.codigo
        }
        lista.push(data);
    })
    return lista;
}

async function buscarPorCodigo(nomeTabela, codigo) {
    const docRef = doc(db, nomeTabela, codigo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Erros("Not found!");
    }
}

async function remover(nomeTabela, codigo) {
    const dados = await deleteDoc(doc(db, nomeTabela, codigo));
    console.log("Removido com sucesso");
    return {
        message: `${codigo} removido!`
    }
}

module.exports = {
    cadastrar,
    buscar,
    buscarPorCodigo,
    remover
}