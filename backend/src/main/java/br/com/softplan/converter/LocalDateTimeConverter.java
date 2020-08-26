package br.com.softplan.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Converter
public class LocalDateTimeConverter implements AttributeConverter<LocalDateTime, Timestamp> {

    @Override
    public Timestamp convertToDatabaseColumn(LocalDateTime date) {
        return date != null ? Timestamp.valueOf(date) : null;
    }

    @Override
    public LocalDateTime convertToEntityAttribute(Timestamp date) {
        return date != null ? date.toLocalDateTime() : null;
    }

}
