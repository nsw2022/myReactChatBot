# 서울시 버스 정보 제공 챗봇

이 프로젝트는 서울시의 버스 정보를 제공하는 React 기반 챗봇입니다. 사용자는 다양한 버스 노선 정보에 대해 질문할 수 있으며, 챗봇은 실시간으로 해당 정보를 제공합니다.

## 주요 기능

* **버스 노선 정보 조회**: 특정 버스 노선에 대한 정보를 조회할 수 있습니다.
* **버스 도착 시간 조회**: 사용자가 버스 정류장에서 대기 중인 경우, 해당 버스의 도착 시간을 알려줍니다.
* **혼잡도 조회**: 버스의 현재 혼잡도를 조회할 수 있습니다.

이 챗봇은 OpenAI의 GPT3.5 turbo 기반으로 질문에 대한 답변을 생성하며, 서울시 공공 데이터 포털에서 제공하는 실시간 버스 운행 정보를 활용합니다.

## 사용 방법

이 챗봇을 사용하려면, 질문을 입력하고 엔터키를 입력합니다. 챗봇은 질문에 대한 답변을 생성하고 화면에 표시합니다.

## 개발 환경

이 프로젝트는 React를 기반으로 개발되었으며, 서버는 FastAPI를 사용하여 구축되었습니다. 
