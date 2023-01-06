package ru.task.board.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import ru.task.board.dto.advert.AdCreateDto;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.advert.AdUpdateDto;
import ru.task.board.entity.Ad;


import java.time.OffsetDateTime;
import java.util.List;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface AdMapper {

  AdDto adToAdDto(Ad entity);

  Ad adUpdateRequestToAdView(AdUpdateDto dto, String owner, Integer adId, OffsetDateTime createdAt, OffsetDateTime lastUpdatedAt, Integer subId);

  Ad toAd(AdCreateDto dto, String owner, OffsetDateTime createdAt);

  List<AdDto> adsToAdsDto(List<Ad> ads);

  @AfterMapping
  default void afterMappingFromCreate(@MappingTarget Ad target, AdCreateDto source) {

  }

}
