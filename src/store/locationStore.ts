import { makeAutoObservable } from 'mobx';
import type { Cords } from '../types';
class LocationStore {
    cords: Cords | null = null;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCords(cords: Cords) {
        this.cords = cords;
    }

    getLocation() {
        if (!navigator.geolocation) {
            this.error = 'Geolocation is not supported by your browser.';
            return;
        }
        this.loading = true;
        this.error = null;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setCords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => {
                this.error = error.message || 'Failed to get location';
                this.loading = false;
            }
        );
    }
}

const locationStore = new LocationStore();

export default locationStore;
