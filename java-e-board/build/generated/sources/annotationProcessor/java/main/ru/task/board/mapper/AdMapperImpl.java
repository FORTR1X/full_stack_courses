package ru.task.board.mapper;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.advert.AdCreateDto;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.advert.AdDto.AdDtoBuilder;
import ru.task.board.dto.advert.AdUpdateDto;
import ru.task.board.entity.Ad;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T15:12:35+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class AdMapperImpl implements AdMapper {

    @Override
    public AdDto adToAdDto(Ad entity) {
        if ( entity == null ) {
            return null;
        }

        AdDtoBuilder adDto = AdDto.builder();

        adDto.adId( entity.getAdId() );
        adDto.owner( entity.getOwner() );
        adDto.header( entity.getHeader() );
        adDto.description( entity.getDescription() );
        adDto.price( entity.getPrice() );
        adDto.createdAt( entity.getCreatedAt() );
        adDto.lastUpdatedAt( entity.getLastUpdatedAt() );
        adDto.subId( entity.getSubId() );
        String[] photos = entity.getPhotos();
        if ( photos != null ) {
            adDto.photos( Arrays.copyOf( photos, photos.length ) );
        }

        return adDto.build();
    }

    @Override
    public Ad adUpdateRequestToAdView(AdUpdateDto dto, String owner, Integer adId, OffsetDateTime createdAt, OffsetDateTime lastUpdatedAt, Integer subId) {
        if ( dto == null && owner == null && adId == null && createdAt == null && lastUpdatedAt == null && subId == null ) {
            return null;
        }

        Ad ad = new Ad();

        if ( dto != null ) {
            ad.setHeader( dto.getHeader() );
            ad.setDescription( dto.getDescription() );
            ad.setPrice( dto.getPrice() );
            String[] photos = dto.getPhotos();
            if ( photos != null ) {
                ad.setPhotos( Arrays.copyOf( photos, photos.length ) );
            }
        }
        if ( owner != null ) {
            ad.setOwner( owner );
        }
        if ( adId != null ) {
            ad.setAdId( adId );
        }
        if ( createdAt != null ) {
            ad.setCreatedAt( createdAt );
        }
        if ( lastUpdatedAt != null ) {
            ad.setLastUpdatedAt( lastUpdatedAt );
        }
        if ( subId != null ) {
            ad.setSubId( subId );
        }

        return ad;
    }

    @Override
    public Ad toAd(AdCreateDto dto, String owner, OffsetDateTime createdAt) {
        if ( dto == null && owner == null && createdAt == null ) {
            return null;
        }

        Ad ad = new Ad();

        if ( dto != null ) {
            ad.setHeader( dto.getHeader() );
            ad.setDescription( dto.getDescription() );
            ad.setPrice( dto.getPrice() );
            ad.setSubId( dto.getSubId() );
            String[] photos = dto.getPhotos();
            if ( photos != null ) {
                ad.setPhotos( Arrays.copyOf( photos, photos.length ) );
            }
        }
        if ( owner != null ) {
            ad.setOwner( owner );
        }
        if ( createdAt != null ) {
            ad.setCreatedAt( createdAt );
        }

        afterMappingFromCreate( ad, dto );

        return ad;
    }

    @Override
    public List<AdDto> adsToAdsDto(List<Ad> ads) {
        if ( ads == null ) {
            return null;
        }

        List<AdDto> list = new ArrayList<AdDto>( ads.size() );
        for ( Ad ad : ads ) {
            list.add( adToAdDto( ad ) );
        }

        return list;
    }
}
