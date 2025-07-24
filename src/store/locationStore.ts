import { makeAutoObservable } from 'mobx';
import type { Cords } from '../types';
class LocationStore {
    cords: Cords | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    setCords(cords: Cords) {
        this.cords = cords;
    }
}

const locationStore = new LocationStore();

export default locationStore;
