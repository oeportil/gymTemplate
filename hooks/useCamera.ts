import { postApiAssistance } from '@/services/assitance.service';
import useUserStore from '@/store/useUserStore';
import { useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { Alert } from 'react-native';
import useSignalStore from '../store/useSignalStore';

const useCamera = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const { user } = useUserStore();
    const isPermissionGranted = Boolean(permission?.granted);
    const { setSignal, signal } = useSignalStore();

    const openCamera = () => {
        if (!isPermissionGranted) {
            requestPermission();
        }

        if (permission?.granted) {
            router.push("/scanner");
        }
    }

    const saveAssitance = async (slug: string) => {
        const data = {
            code: user?.code,
            slug: slug,
        }
        const response = await postApiAssistance(data);
        console.log(response)
        if (response && response.status) {
            router.back();
            Alert.alert("Exito", response?.data?.msg || "Asistencia guardada correctamente");
            setSignal(!signal);
        } else {
            Alert.alert("Error", response?.data?.msg || "Error al guardar asistencia intente mas tarde o vuelva a iniciar sesión");
            router.back();
        }
    }

    const closeCamera = () => {
        router.back();
    }

    return {
        isPermissionGranted,
        openCamera,
        closeCamera,
        saveAssitance
    }
}

export default useCamera