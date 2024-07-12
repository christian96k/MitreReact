// Hub.service.ts

import axios, { AxiosInstance } from 'axios';
import { ExtendedMitreAttackInfo } from '../models/Hub.model';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import { ENDPOINTS } from '../../../shared/constants/endpoints';

class HubService {
  private apiClient: AxiosInstance;
  private timeout: number = 10000;

  constructor() {
    this.apiClient = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`,
      timeout: this.timeout,
    });
  }

  public async getMitreData(filter: HackerType): Promise<ExtendedMitreAttackInfo[]> {
    try {
      const response = await this.apiClient.get<ExtendedMitreAttackInfo[]>(`/${ENDPOINTS.MITRE}`, {
        params: { filter },
      });
      return response.data;
    } catch (error) {
      console.error('Errore durante il fetch dei dati Mitre:', error);
      throw error; // Rilancia l'errore per gestirlo nel chiamante
    }
  }

  public mapMitreData(data: ExtendedMitreAttackInfo[]): ExtendedMitreAttackInfo[] {
    // Implementa la mappatura dei dati come necessario
    return data;
  }

  public filterByActorRecursive(data: ExtendedMitreAttackInfo[], filter: HackerType): ExtendedMitreAttackInfo[] {
    // Implementa il filtro come necessario
    console.log('filtro TODO:::', filter);
    return data;
  }
}

export default HubService;
