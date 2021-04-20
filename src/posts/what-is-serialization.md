---
title: 'What Is Serialization?'
date: '2021-04-20T10:30:00-05:00'
bannerImgSrc: 'https://images.unsplash.com/photo-1589210037719-3963f6efd6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
bannerImgAlt: 'A stream in a forest'
---

I often get confused when trying to remember the difference between
serialization and deserialization. In this post, I will try to explain it in a
simple, easy-to-remember way.

**Serialization** is the process of translating data into a format that can be
stored or transmitted with the ability to reconstruct that data later.

The opposite of this is called **deserialization**. So, translating serialized
data back into a clone of the original object.

Often, the format of serialized data is a stream of bytes. This allows the data
to be reconstructed (aka deserialized) in other environments that may not have
the same capabilities as the system where the data was originally serialized.

This concept is applicable to all programming languages. Here are some examples
to help solidify your understanding.

## An Example in Java

If you work in Java, you may be familiar with the
[Gson](https://github.com/google/gson) library. This is a Java
serialization/deserialization library built by Google. It provides two methods
that allow you to serialize or deserialize data, `toJson()` and `fromJson()`.

When you call `toJson()`, you are **serializing** a Java object into a JSON
object.

When you call `fromJson()`, you are **deserializing** a JSON object back into a
Java object.

So, deserialization is reconstructing data in a format that is usable in the
current context.

## An Example in Javascript

If you have used `JSON.parse()` or `JSON.stringify()` before, then
congratulations! You are familiar with this concept in Javascript.

When you call `JSON.stringify()`, you are **serializing** the data.

When you call `JSON.parse()`, you are **deserializing** the data to be used as
an object.
