import { ApiProperty } from "@nestjs/swagger";

export class ValidationErrorDto {
  @ApiProperty({ type: String, required: false })
  readonly property?: string;

  @ApiProperty({ type: [String] })
  readonly messages: string[];

  constructor(messages: string[], property: string) {
    this.property = property;
    this.messages = messages;
  }
}
