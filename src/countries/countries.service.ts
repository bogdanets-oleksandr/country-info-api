import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {

    availableCountriesUrl = process.env.AVAILABLE_COUNTRIES_URL || "";
    countryNeighboursBaseUrl = process.env.COUNTRY_NEIGHBOURS_BASE_URL || "";
    countryPopulationDataUrl = process.env.COUNTRY_POPULATION_DATA_URL || "";
    countryFlagUrl = process.env.COUNTRY_FLAG_URL || "";

    async getAvaiableCountries(): Promise<string> {
        return (await fetch(this.availableCountriesUrl)).json();
    }

    async getCountryNeighbours(countryCode: string): Promise<string[] | null> {

        const resp = await fetch(this.countryNeighboursBaseUrl + countryCode);

        const body = await resp.json();

        return body.borders || null;
    }

    async getCountryPopulationData(country: string): Promise<string | null> {

        const resp = await fetch(this.countryPopulationDataUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    country: country
                }),
            });

        const body = await resp.json();

        if (body.data) {
            return body.data.populationCounts;
        } else {
            return null;
        }
    }

    async getCountryFlag(countryCode: string): Promise<string | null> {

        const resp = await fetch(this.countryFlagUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    iso2: countryCode
                }),
            });

        const body  = await resp.json();

        if (body.data) {
            return body.data.flag;
        } else {
            return null
        }
    }
}
