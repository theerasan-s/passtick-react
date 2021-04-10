import firebase from 'firebase'

export default function useLoginAction() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const onSignInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
    }

    return { onSignInWithGoogle }
}
