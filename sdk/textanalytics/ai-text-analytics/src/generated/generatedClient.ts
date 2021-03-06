/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { GeneratedClientContext } from "./generatedClientContext";
import {
  GeneratedClientOptionalParams,
  MultiLanguageBatchInput,
  GeneratedClientEntitiesRecognitionGeneralOptionalParams,
  GeneratedClientEntitiesRecognitionGeneralResponse,
  GeneratedClientEntitiesRecognitionPiiOptionalParams,
  GeneratedClientEntitiesRecognitionPiiResponse,
  GeneratedClientEntitiesLinkingOptionalParams,
  GeneratedClientEntitiesLinkingResponse,
  GeneratedClientKeyPhrasesOptionalParams,
  GeneratedClientKeyPhrasesResponse,
  LanguageBatchInput,
  GeneratedClientLanguagesOptionalParams,
  GeneratedClientLanguagesResponse,
  GeneratedClientSentimentOptionalParams,
  GeneratedClientSentimentResponse
} from "./models";

class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    super(endpoint, options);
  }

  /**
   * The API returns a list of general named entities in a given document. For the list of supported
   * entity types, check <a href="https://aka.ms/taner">Supported Entity Types in Text Analytics API</a>.
   * See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list
   * of enabled languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesRecognitionGeneral(
    input: MultiLanguageBatchInput,
    options?: GeneratedClientEntitiesRecognitionGeneralOptionalParams
  ): Promise<GeneratedClientEntitiesRecognitionGeneralResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      entitiesRecognitionGeneralOperationSpec
    ) as Promise<GeneratedClientEntitiesRecognitionGeneralResponse>;
  }

  /**
   * The API returns a list of entities with personal information (\"SSN\", \"Bank Account\" etc) in the
   * document. For the list of supported entity types, check <a href="https://aka.ms/tanerpii">Supported
   * Entity Types in Text Analytics API</a>. See the <a href="https://aka.ms/talangs">Supported languages
   * in Text Analytics API</a> for the list of enabled languages.
   *
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesRecognitionPii(
    input: MultiLanguageBatchInput,
    options?: GeneratedClientEntitiesRecognitionPiiOptionalParams
  ): Promise<GeneratedClientEntitiesRecognitionPiiResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      entitiesRecognitionPiiOperationSpec
    ) as Promise<GeneratedClientEntitiesRecognitionPiiResponse>;
  }

  /**
   * The API returns a list of recognized entities with links to a well-known knowledge base. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesLinking(
    input: MultiLanguageBatchInput,
    options?: GeneratedClientEntitiesLinkingOptionalParams
  ): Promise<GeneratedClientEntitiesLinkingResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      entitiesLinkingOperationSpec
    ) as Promise<GeneratedClientEntitiesLinkingResponse>;
  }

  /**
   * The API returns a list of strings denoting the key phrases in the input text. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  keyPhrases(
    input: MultiLanguageBatchInput,
    options?: GeneratedClientKeyPhrasesOptionalParams
  ): Promise<GeneratedClientKeyPhrasesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      keyPhrasesOperationSpec
    ) as Promise<GeneratedClientKeyPhrasesResponse>;
  }

  /**
   * The API returns the detected language and a numeric score between 0 and 1. Scores close to 1
   * indicate 100% certainty that the identified language is true. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze for language endpoint.
   * @param options The options parameters.
   */
  languages(
    input: LanguageBatchInput,
    options?: GeneratedClientLanguagesOptionalParams
  ): Promise<GeneratedClientLanguagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      languagesOperationSpec
    ) as Promise<GeneratedClientLanguagesResponse>;
  }

  /**
   * The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple
   * levels of granularity, start from the a document level, down to sentence and key terms (aspects) and
   * opinions.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  sentiment(
    input: MultiLanguageBatchInput,
    options?: GeneratedClientSentimentOptionalParams
  ): Promise<GeneratedClientSentimentResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { input, options: operationOptions },
      sentimentOperationSpec
    ) as Promise<GeneratedClientSentimentResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const entitiesRecognitionGeneralOperationSpec: coreHttp.OperationSpec = {
  path: "/entities/recognition/general",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntitiesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics,
    Parameters.stringIndexType
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const entitiesRecognitionPiiOperationSpec: coreHttp.OperationSpec = {
  path: "/entities/recognition/pii",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PiiEntitiesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics,
    Parameters.stringIndexType,
    Parameters.domain
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const entitiesLinkingOperationSpec: coreHttp.OperationSpec = {
  path: "/entities/linking",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntityLinkingResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics,
    Parameters.stringIndexType
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const keyPhrasesOperationSpec: coreHttp.OperationSpec = {
  path: "/keyPhrases",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.KeyPhraseResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [Parameters.modelVersion, Parameters.includeStatistics],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const languagesOperationSpec: coreHttp.OperationSpec = {
  path: "/languages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LanguageResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input1,
  queryParameters: [Parameters.modelVersion, Parameters.includeStatistics],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const sentimentOperationSpec: coreHttp.OperationSpec = {
  path: "/sentiment",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SentimentResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics,
    Parameters.stringIndexType,
    Parameters.opinionMining
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};

// Operation Specifications

export {
  GeneratedClient,
  GeneratedClientContext,
  Models as GeneratedModels,
  Mappers as GeneratedMappers
};
