/**
 * 单例模式：在程序的生命周期内只有一个全局实例，并且不能在new出新的实例
 * 如：Cache ，ThreadPool
 * */

class Singleton {
    public static readonly instance: Singleton = new Singleton();

    public static getInstance(): Singleton{
        return this.instance;
    }
}
