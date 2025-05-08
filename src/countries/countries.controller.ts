import { Controller, Get, NotFoundException, Query} from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService){}

    @Get()
    getAvailableCountries(): Promise<string> {
        return this.countriesService.getAvaiableCountries();
    }

    @Get('borders')
    async getBorderingCountries(@Query('countryCode') countryCode: string) {
        const borders = await this.countriesService.getCountryNeighbours(countryCode);

        if (borders === null) {
            throw new NotFoundException("No such country code");
        }

        return borders;
    }

    @Get('population')
    async getPopulation(@Query('country') country: string) {

        const population = await this.countriesService.getCountryPopulationData(country);

        if (population === null) {
            throw new NotFoundException("No such country or no data for it ");
        }

        return population;
    }

    @Get('flag')
    async getFlagImage(@Query('countryCode') countryCode: string) {

        const flag = await this.countriesService.getCountryFlag(countryCode);

        if (flag === null) {
            throw new NotFoundException("No such countryCode");
        }

        return flag;
    }
}
